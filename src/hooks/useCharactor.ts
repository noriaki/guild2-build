import useOrigin, { OriginValues } from './useOrigin';

type CharactorValues =
  | {
      origin: OriginValues;
    }
  | undefined;

const useCharactor = (initialValues: CharactorValues) => {
  const origins = useOrigin(initialValues?.origin);

  return {
    ...origins,
  };
};

export default useCharactor;
