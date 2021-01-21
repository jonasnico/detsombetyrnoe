import useSWR from "swr";
import Stilling from "./stilling";
import styled from "styled-components";

const Style = styled.div`
  max-width: 25rem !important;
  ul {
    margin-top: 4rem;
  }
`;

const fetcher = (url) => fetch(url).then((r) => r.json());

const Stillinger = () => {
  const { data: stillinger, error } = useSWR("/api/stillinger", fetcher);

  if (!stillinger) return null;

  return (
    <Style>
      <h2 id="ledige-stillinger">Ledige stillinger</h2>
      <ul>
        {stillinger.map((stilling) => (
          <Stilling key={stilling.id} {...stilling} />
        ))}
      </ul>
    </Style>
  );
};

export default Stillinger;
