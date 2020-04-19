import { Router } from 'express';

const appointmentsRoutes = Router();

appointmentsRoutes.get('/', (request, response) => {
  return response.json({ message: 'apointments' });
});

export default appointmentsRoutes;
