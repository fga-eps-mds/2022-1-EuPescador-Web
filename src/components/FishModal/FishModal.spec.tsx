import { render, fireEvent} from '@testing-library/react'
import { FishWiki } from '~services/api/interfaces'
import { FishModal } from './FishModal'

describe('FishModal Component', () => {

    const FishWikiMock: FishWiki = ({
        id: '123',
        largeGroup: "Peixes com escamas",
        group: "Cachorras",
        commonName: "Ueua, peixe-cachorro, Bicuda-branca",
        scientificName: "Acestrorhynchus falcatus",
        family: "Acestrorhynchidae",
        food: "Peixes",
        habitat: "Grandes rios.",
        maxSize: "45",
        maxWeight: null,
        isEndemicInfo: "Não",
        isEndemic: false,
        isThreatenedInfo: "Não",
        isThreatened: false,
        hasSpawningSeasonInfo: "Não",
        hasSpawningSeason: false,
        wasIntroducedInfo: "Não",
        wasIntroduced: false,
        funFact: null,
        photo: 'https://imgur.com/ybTpCh6.png'
    })
    it('Should render component', () => {
        const { getByText } = render(<FishModal fish={FishWikiMock} />)

        expect(getByText(FishWikiMock.habitat)).toBeInTheDocument()
        expect(getByText(FishWikiMock.largeGroup)).toBeInTheDocument()
        expect(getByText(FishWikiMock.group)).toBeInTheDocument()
        expect(getByText(FishWikiMock.commonName)).toBeInTheDocument()
        expect(getByText(FishWikiMock.scientificName)).toBeInTheDocument()
        expect(getByText(FishWikiMock.family)).toBeInTheDocument()
        expect(getByText(FishWikiMock.food)).toBeInTheDocument()
        expect(getByText(FishWikiMock.habitat)).toBeInTheDocument()
        expect(getByText(FishWikiMock.maxSize)).toBeInTheDocument()

    })
})
