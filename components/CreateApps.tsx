
import { useTranslation } from 'next-i18next'

export default function CreateApps() {

  const { t } = useTranslation('appCatalog')
  const appCatalog = t('apps', { returnObjects: true })

  // Convert constant appData from object to array
  const appCatalogArray = Object.entries(appCatalog)

  return (
    <div>
      <div className="overflow-x-auto rounded-lg border-4 border-solid overflow-y-auto relative my-10 flex">
        <div className="flex-none w-2/5">
          {appCatalogArray.map((post, index) => (
            <div key={index} className="h-14 p-2 border-b-4 border-r-4 border-solid hover:bg-white hover:border-r-0 flex">
              <p className="inline-block align-middle self-center">{appCatalogArray[index][1].titleText}</p>
            </div>
          ))}
        </div>
        <div className="text-center flex-auto bg-white">
          Test
        </div>
      </div>
    </div>
  );
}