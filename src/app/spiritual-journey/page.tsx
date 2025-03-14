import PageCover from "@/components/PageCover";
import SpiritualJourneyDetails from "@/pages/spiritual-journey/SpiritualJourneyDetails";

const SpiritualJourneyPage = () => {
  return (
    <div>
      <PageCover
        title="Join Us for a Spiritual Journey"
        bgImage="https://img.freepik.com/free-photo/arab-people-with-camel-caravan_1004-19.jpg?t=st=1741976399~exp=1741979999~hmac=24513abbb05381cff6eeb84aeea813ad2cca86392ebff969eb847f38a51f77e6&w=996"
      />
      <SpiritualJourneyDetails />
    </div>
  );
};

export default SpiritualJourneyPage;
