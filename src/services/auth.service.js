import User from '../models/user.model.js';
import { hashPassword, comparePassword } from '../utils/password.js';
import { signToken } from '../utils/token.js';

export async function register({ name, email, password }) {
  const exists = await User.findOne({ email });
  if (exists) throw new Error('Email já cadastrado');

  const passwordHash = await hashPassword(password);
  const user = await User.create({ name, email, passwordHash });
  const token = signToken({ sub: user.id, email: user.email, role: user.role });
  return { user: user.toJSONSafe(), token };
}

export async function login({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Credenciais inválidas');
  const ok = await comparePassword(password, user.passwordHash);
  if (!ok) throw new Error('Credenciais inválidas');

  const token = signToken({ sub: user.id, email: user.email, role: user.role });
  return { user: user.toJSONSafe(), token };
}
