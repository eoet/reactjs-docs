import { MicroFrontend } from '../core/micro-frontend';

export const Restaurant = ({history}) => (
  <MicroFrontend history={history} name="Restaurant" host={restaurantHost} />
);