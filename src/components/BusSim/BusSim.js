import React from "react";

export default function BusSim() {
  return (
    <div className="flex flex-col bg-white my-4 md:my-6 py-2 md:py-4 ">
      <div className="mx-auto text-2xl md:text-4xl font-bold text-primary-600 font-sans">
        Buses
      </div>
      <div className="mx-auto text-xl md:text-2xl font-bold text-gray-500 font-sans">
        Route Name
      </div>
      <div className="flex flex-wrap w-full md:items-center">
        <div className="flex flex-row mx-auto my-5 md:p-3 border-l-2 md:border-l-4 border-gray-300">
          <div className="flex w-16 h-16 sm:w-32 sm:h-32 mx-2 md:mx-4">
            <img
              className="w-full h-full rounded-lg"
              src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814__340.jpg"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-bold font-sans">Driver: INEZA Faustin</div>
            <div className="my-2 md:my-4">
              <p className="text-ms">
                Plate: RAC306,<br></br>
                Type: Minibus,<br></br>
                From: Kanombe,<br></br>
                To: Nyabugogo<br></br>
              </p>
            </div>
            <div>
              <button>Locate bus</button>
            </div>
          </div>
        </div>

        <div className="flex flex-row mx-auto my-5 md:p-3 border-l-2 md:border-l-4 border-gray-300">
          <div className="flex w-16 h-16 sm:w-32 sm:h-32 mx-2 md:mx-4">
            <img
              className="w-full h-full rounded-lg"
              src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814__340.jpg"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-bold font-sans">Driver: INEZA Faustin</div>
            <div className="my-2 md:my-4">
              <p className="text-ms">
                Plate: RAC306,<br></br>
                Type: Minibus,<br></br>
                From: Kanombe,<br></br>
                To: Nyabugogo<br></br>
              </p>
            </div>
            <div>
              <button>Locate bus</button>
            </div>
          </div>
        </div>

        <div className="flex flex-row mx-auto my-5 md:p-3 border-l-2 md:border-l-4 border-gray-300">
          <div className="flex w-16 h-16 sm:w-32 sm:h-32 mx-2 md:mx-4">
            <img
              className="w-full h-full rounded-lg"
              src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814__340.jpg"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-bold font-sans">Driver: INEZA Faustin</div>
            <div className="my-2 md:my-4">
              <p className="text-ms">
                Plate: RAC306,<br></br>
                Type: Minibus,<br></br>
                From: Kanombe,<br></br>
                To: Nyabugogo<br></br>
              </p>
            </div>
            <div>
              <button>Locate bus</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
