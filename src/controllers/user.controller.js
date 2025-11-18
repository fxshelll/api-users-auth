import { getById, updateById, removeById } from '../services/user.service.js';

export async function getUserController(req, res) {
  try {
    const { id } = req.params;
    const result = await getById(id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
}

export async function updateUserController(req, res) {
  try {
    const { id } = req.params;
    if (req.user.role !== 'admin' && req.user.sub !== id) {
      return res.status(403).json({ error: 'Você só pode editar seu próprio usuário' });
    }
    const result = await updateById(id, req.body);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

export async function deleteUserController(req, res) {
  try {
    const { id } = req.params;
    if (req.user.role !== 'admin' && req.user.sub !== id) {
      return res.status(403).json({ error: 'Você só pode excluir seu próprio usuário' });
    }
    const result = await removeById(id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
}
