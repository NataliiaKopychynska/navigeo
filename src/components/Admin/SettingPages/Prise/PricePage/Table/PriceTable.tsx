import HeadTable from './HeadTable'
import type {
  PriceFilters,
  PriceListItem,
  County,
} from '../../../../../../redux/price/priceType'
import { useEffect, useRef, useState } from 'react'
import BodyTable from './BodyTable'
import ButtonMedium from '../../../../../atoms/ButtonMedium'
import Pagination from '../../../../../atoms/Pagination'
import { useParams } from 'react-router-dom'
import AddModal from './AddModal'
import { useForm } from 'react-hook-form'
import { fetchCounties } from '../../../../../../api/admin/counties'
import { useDispatch } from 'react-redux'
import { postPriceListByIdThunk } from '../../../../../../redux/price/priseThunk'
import type { AppDispatch } from '../../../../../../redux/store'

type Props = {
  selectedPriceList: PriceListItem[]
}

type AddPriceFormData = {
  basePrice: number
  additionalPrice: number
}

function PriceTable({ selectedPriceList }: Props) {
  const paramsID = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const [page, setPage] = useState(1)
  const [totalPage, setTotolPage] = useState(50)
  const [isOpenAddModal, setIsOpenAddModal] = useState(false)

  const [isOpenEditPanel, setIsOpenEditPanel] = useState(false)
  const [selectedCountyId, setSelectedCountyId] = useState<string | null>(null)
  const [counties, setCounties] = useState<County[]>([])

  const wrapperRef = useRef(null)

  const { register, handleSubmit } = useForm<AddPriceFormData>()
  const [filters, setFilters] = useState<PriceFilters>({
    localization: '',
    basic_prise: 0,
    extra_price: 0,
  })

  useEffect(() => {
    async function load() {
      const data = await fetchCounties()
      setCounties(data)
    }
    load()
  }, [])

  const countyOptions = counties.map((county) => ({
    label: county.name,
    value: county.id,
  }))

  const addLocationPrice = handleSubmit(async (body) => {
    if (!selectedCountyId || !paramsID.priceID) {
      console.error('Powiat nie wybrany')
      return
    }

    try {
      const payload = {
        priceListId: paramsID.priceID,
        body: {
          countyId: selectedCountyId,
          basePrice: body.basePrice * 100,
          additionalPrice: body.additionalPrice * 100,
        },
      }

      await dispatch(postPriceListByIdThunk(payload)).unwrap()

      setIsOpenAddModal(false)
      setSelectedCountyId(null)
    } catch (error: unknown) {
      console.error('error creating price', error)
    }
  })

  const setFiltersFunction = <K extends keyof PriceFilters>(
    key: K,
    value: PriceFilters[K],
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
    // setPage(1)
  }

  return (
    <div className=" flex flex-col mt-[40px] ">
      <table>
        <HeadTable
          filters={filters}
          setFilters={setFilters}
          setFiltersFunction={setFiltersFunction}
        />
        <BodyTable
          selectedPriceList={selectedPriceList}
          onClick={() => setIsOpenEditPanel(true)}
          isOpenEditPanel={isOpenEditPanel}
        />
      </table>
      <div className="flex relative justify-between   w-full">
        <Pagination page={page} setPage={setPage} totalPages={totalPage} />
        <div className="mt-[24px]">
          <ButtonMedium
            tittle="Dodaj powiat"
            onClick={() => setIsOpenAddModal(true)}
          />
        </div>
      </div>
      {isOpenAddModal && (
        <AddModal
          CancelBTN={() => setIsOpenAddModal(false)}
          AcceptBTN={addLocationPrice}
          register={register}
          options={countyOptions}
          selected={selectedCountyId}
          setSelected={(value: string) => setSelectedCountyId(value)}
          wrapperRef={wrapperRef}
        />
      )}
    </div>
  )
}

export default PriceTable
