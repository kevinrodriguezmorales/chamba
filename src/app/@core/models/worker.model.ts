export interface WorkerProfile {
  id: number;
  names: string;
  isVerified: boolean;
  photo: string;
  category: WorkerCategory;
  work: WorkerWork;
}

interface WorkerCategory {
  id: number;
  name: string;
}

interface WorkerWork {
  total: number;
  valoration: number;
  quotes: number;
}
