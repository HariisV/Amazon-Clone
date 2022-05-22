import { StarIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

const Product = (props) => {
  const { title, price, image, rating } = props;
  return (
    <div className="flex overflow-hidden flex-col mt-0 mb-5 rounded-lg shadow-lg md:mt-5 md:mb-0">
      <div className="py-8 px-6 bg-white sm:p-10 sm:pb-6">
        <div>
          <h3 className="inline-flex text-2xl  font-extrabold tracking-wide " id="tier-standard">
            {title}
          </h3>
        </div>
        <div className="my-4 text-lg font-semibold">
          <div className="flex">
            {Array(rating)
              .fill()
              .map(() => (
                <StarIcon key={Math.random()} className="w-auto h-6 text-yellow-400" />
              ))}
            {Array(rating)
              .fill()
              .map(() => {
                // console.log(rating);
                if (rating < 4) {
                  // console.log('ggwp');
                  return <StarIcon key={Math.random()} className="w-auto h-6" />;
                }
              })}
          </div>
        </div>
        <div className="flex justify-center">
          <img src={image} alt="" />
        </div>
        <p className="mt-5 text-xl text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptas sit delectus
          debitis laudantium reiciendis doloribus repellat assumenda minima culpa quisquam quidem
          facere ducimus reprehenderit, sequi fugit! Laudantium, soluta sapiente.
        </p>
        <div className="flex items-baseline mt-4 text-2xl font-extrabold">Rp {price}</div>
      </div>
      <div className="flex flex-col flex-1 justify-between px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6">
        <div className="rounded-md shadow">
          <a
            href="ok"
            className="flex justify-center items-center py-3 px-5 text-base font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-md border border-transparent"
            aria-describedby="tier-standard">
            Add To Basket
          </a>
        </div>
      </div>
    </div>
  );
};
Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
export default Product;
