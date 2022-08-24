import { fishLogService } from "./fishService";

async function ReviewFishLog(
    logId: string,
    name: string | undefined,
    token: string
) {
    const userToken = `Bearer ${token}`;
    const res = await fishLogService.patch(`/fishLog/${logId}`, {
        name,
        reviewed : true,
        visible : true
    }, { headers: { Authorization: `Bearer ${token}`  } });
    return res.data;
}

export { ReviewFishLog };
