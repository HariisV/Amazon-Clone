import Product from './Product';

export default function Example() {
  return (
    <div className="pb-10  bg-gray-50">
      <div
        className="hidden overflow-hidden relative bg-no-repeat bg-contain md:block"
        style={{ backgroundImage: 'url("/images/hero.jpg")' }}>
        <div className="relative pt-6 pb-0 ">
          <div className="px-4 mx-auto mt-16 max-w-7xl sm:px-6 sm:mt-24">
            <div className="h-52 text-center"></div>
          </div>
        </div>

        <div className="relative mb-5">
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="flex gap-5">
              <Product
                id="1"
                rating={5}
                title="i13 Pro Max 5G smartphone 512GB Dual SIM - Putih, 128GB"
                price="13.000.000"
                image="https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/30/fe2041e8-3e52-4db5-9c63-6592380b514b.jpg"
              />

              <Product
                id="5"
                title="Tas Ransel Pria Laptop Backpack Kapasitas Besar slim mpde hm 06 - Hitam"
                price="13.000.000"
                rating={3}
                image="https://images.tokopedia.net/img/cache/900/VqbcmM/2020/11/16/7c98836f-9b6c-4492-8c80-b4c05a137450.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="px-4 mx-auto mt-10 max-w-7xl sm:px-6">
          <div className="block gap-5 md:flex">
            <Product
              id="1"
              title="i13 Pro Max 5G smartphone 512GB Dual SIM - Putih, 128GB"
              price="13.000.000"
              rating={5}
              image="https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/30/fe2041e8-3e52-4db5-9c63-6592380b514b.jpg"
            />
            <Product
              id="1"
              title="i13 Pro Max 5G smartphone 512GB Dual SIM - Putih, 128GB"
              price="13.000.000"
              rating={5}
              image="https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/30/fe2041e8-3e52-4db5-9c63-6592380b514b.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
