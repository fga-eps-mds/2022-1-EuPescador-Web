import { render, fireEvent } from '@testing-library/react'
import { FishRecord } from './FishRecord'

describe('FishModal Component', () => {

    it('Should render selected LargeGroup', () => {
        const data = render(<FishRecord />)
        const select = data.container.querySelector('#selectLargeGroup')
        fireEvent.change(select, { target: { value: '1' } })
        const options = data.container.querySelector('#selectLargeGroup')
        expect(options[0].value).toBe('Sem grande grupo')
    })

})
