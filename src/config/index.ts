import TICK from '../assets/images/checked-tick.svg'
const supa = {
  url: import.meta.env.VITE_SUPABASE_URL,
  anon_key: import.meta.env.VITE_ANON_KEY,
};

const images = {
  tick: TICK,
};

export { supa, images };
