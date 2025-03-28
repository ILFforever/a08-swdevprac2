import Image from 'next/image';
import getVenue from '@/libs/getVenue';

export default async function VenueDetailPage({params}: {params: {vid: string}}) {
 
  const venueDetail = await getVenue(params.vid)

  // Check if the venue exists in our map
  return (
    <main className="text-center p-5">
      <h1 className='text-center font-bold text-xl'>{venueDetail.data.name}</h1>
      <div className="flex flex-row my-5">
        <Image src={venueDetail.data.picture}
          alt="Product Picture"
          width={0} height={0} sizes="100vw"
          className="rounded-lg w-[30%] bg-black"/>
        <div className="text-md mx-5 text-left">{venueDetail.data.description}
          <div>Name: {venueDetail.data.name}</div>
          <div>Address: {venueDetail.data.address}</div>
          <div>District: {venueDetail.data.district}</div>
          <div>Province: {venueDetail.data.province}</div>
          <div>Postal code: {venueDetail.data.postalcode}</div>
          <div>Tel: {venueDetail.data.tel}</div>
          <div>Rate: {venueDetail.data.dailyrate}</div>
        </div>
      </div>
    </main>
  )
}
