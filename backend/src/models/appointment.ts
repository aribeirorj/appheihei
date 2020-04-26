import { uuid } from 'uuidv4';

class Appointment {
  id: string;
  date: Date;

  constructor({ date }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.date = date;
  }
}

export default Appointment;
