import { register, login } from '../services/auth.service.js';

export async function registerController(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: 'Dados obrigatórios ausentes' });
    const result = await register({ name, email, password });
    return res.status(201).json(result);
  } catch (err) {
    const status = err.message.includes('cadastrado') ? 409 : 400;
    return res.status(status).json({ error: err.message });
  }
}

export async function loginController(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Dados obrigatórios ausentes' });
    const result = await login({ email, password });
    return res.status(200).json(result);
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
}
