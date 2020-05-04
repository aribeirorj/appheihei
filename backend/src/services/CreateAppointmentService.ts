import Appointment from '../models/appointment';
import { startOfHour } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ date }: Request): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentSameDate = this.appointmentsRepository.findByDate(
      appointmentDate
    );

    if (findAppointmentSameDate) {
      throw Error('Ja existe apontamento');
    }

    const appointment = this.appointmentsRepository.create({
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
