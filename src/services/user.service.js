import User from '../models/user.model.js';
import { hashPassword } from '../utils/password.js';

export async function getById(id) {
  const user = await User.findById(id);
  if (!user) throw new Error('Usuário não encontrado');
  return user.toJSONSafe();
}

export async function updateById(id, payload) {
  const update = { ...payload };
  if (payload.password) {
    update.passwordHash = await hashPassword(payload.password);
    delete update.password;
  }
  const user = await User.findByIdAndUpdate(id, update, { new: true });
  if (!user) throw new Error('Usuário não encontrado');
  return user.toJSONSafe();
}

export async function removeById(id) {
  const user = await User.findByIdAndDelete(id);
  if (!user) throw new Error('Usuário não encontrado');
  return { deleted: true };
}
