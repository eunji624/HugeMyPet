import express from 'express';
const scheduleRouter = express.Router();

import { PetsitterScheduleController } from '../controller/petsitter.schedule.controller.js';
import { needSignin } from '../middlewares/member.login.middleware.js';
const petSitterScheduleController = new PetsitterScheduleController();

/* 특정 펫시터 예약 스케쥴 가져오기 */
scheduleRouter.get('/', petSitterScheduleController.getSchedules);

/* 아래 Router는 로그인이 필요한 API */
scheduleRouter.use(needSignin);

/* 스케쥴 추가하기 */
scheduleRouter.post('/', petSitterScheduleController.setSchedules)

/* 스케쥴 수정하기 */
scheduleRouter.put('/:scheduleId', petSitterScheduleController.updateSchedules);

export default scheduleRouter;