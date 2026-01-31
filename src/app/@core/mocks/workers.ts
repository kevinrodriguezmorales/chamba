import { WorkerProfile } from "../models/worker.model";
import { HelperService } from "../services/helper.service";
import { LIST_CATEGORIES } from "./categories";

const PHOTOS: string[] = [
  "https://randomuser.me/api/portraits/men/10.jpg",
  "https://randomuser.me/api/portraits/women/11.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/women/13.jpg",
  "https://randomuser.me/api/portraits/men/14.jpg",
  "https://randomuser.me/api/portraits/women/15.jpg",
  "https://randomuser.me/api/portraits/men/16.jpg",
  "https://randomuser.me/api/portraits/women/17.jpg",
];

const workers: WorkerProfile[] = [];

for (let categoryId = 1; categoryId <= 16; categoryId++) {
  const categoryName = LIST_CATEGORIES[categoryId - 1].categoryName;

  for (let i = 1; i <= HelperService.randomInt(10, 15); i++) {
    const globalId = (categoryId - 1) * 10 + i;

    workers.push({
      id: globalId,
      names: `${categoryName} Worker ${i}`,
      isVerified: i % 2 === 0,
      photo: PHOTOS[(globalId - 1) % PHOTOS.length],
      category: {
        id: categoryId,
        name: categoryName,
      },
      work: {
        total: 20 + i * 3 + categoryId,
        valoration: 3.5 + (i % 5) * 0.3,
        quotes: 5 + i * 2,
      },
    });
  }
}

export const LIST_WORKERS: WorkerProfile[] = workers;
