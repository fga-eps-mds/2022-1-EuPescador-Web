import { GetOneWikiFish } from './getOneWikiFish'
import { GetWikiFishes } from './getWikiFishes'

describe('Wiki Service Test', () => {
  it('Recuperar dados de um peixe', async () => {
    await GetOneWikiFish('10').then((response) => {
      expect(response.id).toEqual(10)
    })
  })

  it('Peixe não existente', async () => {
    await GetOneWikiFish('99999').catch((response) => {
      expect(response.response.status).toEqual(404)
    })
  })

  it('Recuperar todos os peixes', async () => {
    await GetWikiFishes().then((response) => {
      expect(response[0].id).toEqual(1)
      expect(response.length).toBeGreaterThanOrEqual(1)
    })
  })

  it('Recuperar todos um peixe', async () => {
    await GetWikiFishes('1').then((response) => {
      expect(response.id).toEqual(1)
    })
  })
})
