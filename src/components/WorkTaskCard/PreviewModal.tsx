import Image from "next/image";
import React, { Fragment, useState } from "react";
import Card from "../Card/Card";

type PreviewModalProps = {
  imageUrls: any;
  onClose: () => void;
};

const PreviewModal: React.FC<PreviewModalProps> = ({ imageUrls, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDotIndex, setCurrentDotIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  function prev() {
    setIsLoading(true);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(imageUrls.length - 1);
    }
  }

  function next() {
    setIsLoading(true);
    if (currentIndex < imageUrls.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 mt-0 flex items-center justify-center bg-black/50"
      style={{ marginTop: 0 }}
    >
      <Card
        className="relative mx-6 flex h-3/4 w-full items-center justify-center p-10 sm:h-4/5 sm:max-w-lg"
        disableEffectOnHover
      >
        <button
          className="absolute top-2 right-2 flex h-10 w-10 items-center justify-center"
          onClick={onClose}
        >
          <svg
            className="w-4 rounded-full fill-neutral-500 hover:bg-neutral-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
        {imageUrls.length === 0 ? (
          <div className="flex flex-col items-center">
            <svg
              className="w-20 fill-neutral-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
            </svg>
            <p className="text-neutral-200">Tidak ada preview</p>
          </div>
        ) : (
          <Fragment>
            <button
              className="absolute left-2 flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
              onClick={prev}
            >
              <svg
                className="w-4 fill-neutral-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </button>
            <button
              className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
              onClick={next}
            >
              <svg
                className="w-4 fill-neutral-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </button>
            <div className="mx-4 py-10">
              <Image
                src={imageUrls[currentIndex]?.file.url}
                alt=""
                width={300}
                height={300}
                onLoad={() => {
                  setIsLoading(false);
                  setCurrentDotIndex(currentIndex);
                }}
                className="h-full"
                quality={20}
              />
            </div>
            <div className="absolute bottom-8 flex space-x-2">
              {imageUrls.map((i: any, key: any) => (
                <div
                  key={key}
                  className={`h-2 w-4 rounded-full ${
                    key === currentDotIndex
                      ? "bg-neutral-500"
                      : "bg-neutral-300"
                  }`}
                ></div>
              ))}
            </div>
            {isLoading && (
              <p className="absolute inset-auto">
                <svg
                  className="w-16 animate-spin fill-neutral-200/80"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
                </svg>
              </p>
            )}
          </Fragment>
        )}
      </Card>
    </div>
  );
};
export default PreviewModal;
