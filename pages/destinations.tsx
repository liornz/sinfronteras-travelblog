interface Props {}

const AllDestinationsPage: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <div>
      <h1>This is the Destinations Page</h1>
      <h2>
        There should be a grid of destinations, parhaps divided into countries.
        Clicking on one of them will lead to the single destination page.
      </h2>
    </div>
  );
};

export default AllDestinationsPage;
