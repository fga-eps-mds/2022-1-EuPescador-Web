import { GetOneWikiFish } from './getOneWikiFish'
import { GetWikiFishes } from './getWikiFishes'

describe('Wiki Service Test', () => {
  it('Recuperar dados de um peixe', async () => {
    await GetOneWikiFish('10').then((response: any) => {
      expect(response.id).toEqual(10)
    })
  })

  it('Peixe não existente', async () => {
    await GetOneWikiFish('99999').catch((response) => {
      expect(response.response.status).toEqual(404)
    })
  })

  it('Recuperar todos os peixes', async () => {
    await GetWikiFishes().then((response: any) => {
      expect(response[0].id).toEqual(1)
      expect(response.length).toBeGreaterThanOrEqual(1)
    })
  })
})
