import Breadcrumb from "./BreadCrumb";

const DashBoardHeading = ({ title, subTitle }: { title: string, subTitle: string }) => {
    return (
        <div className=" lg:mb-5 mb-[1em]">
            <div className="space-y-1 ">
                <p className="md:text-2xl text-xl lg:text-3xl font-bold text-primary"> {title} </p>
                <p className="font-semibold text-sm"> {subTitle} </p>
            </div>
            <Breadcrumb />
        </div>
    );
};

export default DashBoardHeading;