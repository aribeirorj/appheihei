import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRoutes = Router();
const appointmentRepository = new AppointmentsRepository();

appointmentsRoutes.get('/', (request, response) => {
  const appointments = appointmentRepository.all();
  return response.json(appointments);
});

appointmentsRoutes.post('/', (request, response) => {
  try {
    const { date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(
      appointmentRepository
    );

    const appointment = createAppointment.execute({ date: parsedDate });

    return response.json(appointment);
  } catch (error) {
    return response.status(400).json({ msg: error.message });
  }
});

appointmentsRoutes.get('/', (request, response) => {
  return response.json({ message: 'appointments' });
});

export default appointmentsRoutes;
