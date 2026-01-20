import DownloadCard from './DownloadCard'
import downloadsData from '../data/downloads.json'

const DownloadsTab = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 relative">
      <div className="space-y-4">
        {downloadsData.map((item, index) => (
          <DownloadCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

export default DownloadsTab

