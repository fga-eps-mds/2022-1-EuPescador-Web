/* eslint-disable @typescript-eslint/no-unsafe-call */
import { GetAllFishLogs } from './GetAllFishLogs'




jest.mock('./fishLogService', () => {
  const fishLogList = [
    {
      id: "01d49f98-092b-401a-9201-fe3bff9284a8",
      name: "Fish 1",
      largeGroup: "ddd",
      group: "xxx",
      species: "d",
      family: "dd",
      coordenates: {
        latitude: 11,
        longitude: 1
      },
      photo: "dd",
      length: 2,
      weight: null,
      reviewed: null,
      reviewedBy: null,
      visible: null,
      createdAt: null,
      createdBy: null,
      updatedAt: null,
      updatedBy: null,
      deletedAt: null,
      deletedBy: null
    },
    {
      id: "01d49f98-092b-409a-9201-fe3bff9284a8",
      name: "Fish 2",
      largeGroup: "ddd",
      group: "xxx",
      species: "d",
      family: "dd",
      coordenates: {
        latitude: 11,
        longitude: 1
      },
      photo: "dd",
      length: 2,
      weight: null,
      reviewed: null,
      reviewedBy: null,
      visible: null,
      createdAt: null,
      createdBy: null,
      updatedAt: null,
      updatedBy: null,
      deletedAt: null,
      deletedBy: null
    }
  ]
  return {
    fishLogService: {
      get: jest.fn().mockResolvedValue({ data: fishLogList }),
    },
}
})


describe('fishLogServices Test', () => {

  it('Should get status code 200', async() => {
    const res = await GetAllFishLogs('token', '1')
    expect(res[0].name).toBe("Fish 1")
  })

})
