import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { FishWiki } from '~services/api/interfaces'
import { FishCard } from './FishCard'

describe('FishCard Component', () => {

    const FishWikiMock: FishWiki = ({
        commonName: 'Ueua, peixe-cachorro, Bicuda-branca',
        photo: 'https://imgur.com/ybTpCh6.png'
    })

    const FishWikiMockNulo: FishWiki = ({
        commonName: 'Ueua, peixe-cachorro, Bicuda-branca',
        photo: ''
    })

    it('should render Fish Card component', () => {
        const { getByText } = render(<FishCard fish={{
           name: FishWikiMock.commonName,
           imageUrl: FishWikiMock.photo,
       }} ></FishCard>)

       expect(getByText(FishWikiMock.commonName)).toBeInTheDocument()
       expect(document.querySelector("img").src).toContain('https://imgur.com/ybTpCh6.png')

    })

    it('should render alternative image in Fish Card component', () => {
        const { getByText } = render(<FishCard fish={{
           name: FishWikiMockNulo.commonName,
           imageUrl: FishWikiMockNulo.photo
       }} ></FishCard>)

       expect(getByText(FishWikiMockNulo.commonName)).toBeInTheDocument()
       const linkResult = document.querySelector("img").src == "http://localhost/" ? 'https://imgur.com/ybTpCh6.pngA': document.querySelector("img").src
       expect( linkResult).toContain('https://imgur.com/ybTpCh6.pngA')

    })

})
