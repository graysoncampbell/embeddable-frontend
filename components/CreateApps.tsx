
import { useTranslation } from 'next-i18next'
import SectionTitle from "../components/SectionTitle";
import Video from "../components/Video";
import Button from "../components/Button";
import { useState } from 'react';

export default function CreateApps() {
  const [index, setIndex, isActive, setIsActive] = useState(0);

  const { t } = useTranslation('appCatalog')
  const appCatalog = t('apps', { returnObjects: true })
  // Convert constant appData from object to array
  const appCatalogArray = Object.entries(appCatalog)
  const appContent = appCatalogArray[index][1]

  function changeApp({ index }) {
    setIndex(index);
    setActive;
  }
  const setActive = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <div>
      <div className="rounded-lg border-4 border-solid overflow-y-auto relative my-10 flex">
        <div className="flex-none w-2/5">
          {appCatalogArray.map((app, index) => (
            <div onClick={() => changeApp({index})} key={index} className={"h-14 p-2 border-b-4 border-r-4 border-solid hover:bg-white hover:border-r-0 flex" + (isActive ? ' bg-white' : "")}>
              <p className="inline-block align-middle self-center">{appCatalogArray[index][1].titleText}</p>
            </div>
          ))}
        </div>
        <div className="text-center flex-auto bg-white p-10 pb-10">
          <SectionTitle title={appContent.titleText} />
          <Video url={appContent.videoLink} />
          <p className="mx-auto pt-8">{appContent.bodyText}</p>
          <Button type="primary" buttonText={appContent.buttonText} buttonLink={appContent.buttonLink} />
        </div>
      </div>
    </div>
  );
}