import Appointment from '../models/appointment';
import { isEqual } from 'date-fns';

interface CreateAppointmentDTO {
  date: Date;
}

class AppointmentsRepository {
  constructor() {
    this.appointments = [];
  }

  private appointments: Appointment[];

  public all(): Appointment[] {
    return this.appointments;
  }

  public create({ date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ date });
    this.appointments.push(appointment);
    return appointment;
  }

  public findByDate({ date }: CreateAppointmentDTO): Appointment | null {
    const findAppointment = this.appointments.find((appointment) =>
      isEqual(date, appointment.date)
    );
    return findAppointment || null;
  }
}

export default AppointmentsRepository;
