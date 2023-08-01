const CompanyList = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Keka is loved by companies of size 20 to 20,000
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Employee experience that scales as your organization scales
          </p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <img src="https://d2w2i7rp1a0wob.cloudfront.net/media/2023/04/Keka-customers-logos.svg" />
        </div>
      </div>
    </section>
  );
};

export default CompanyList;
