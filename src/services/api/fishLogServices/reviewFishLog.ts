import { ResI } from '../interfaces'
import { fishLogService } from './fishLogService'

export async function ReviewFishLog(
    logId: string,
    name: string | undefined,
    token: string
) {
    const userToken = `Bearer ${token}`;
    const res: ResI = await fishLogService.patch(
        `/fishLog/${logId}`, 
        {
        name,
        reviewed: true,
        visible: true
    }, { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
}

