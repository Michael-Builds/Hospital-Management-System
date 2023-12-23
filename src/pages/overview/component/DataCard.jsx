import {
    Card,
    Text,
    Metric,
    Flex,
    Icon
}
    from "@tremor/react";
import PropTypes from "prop-types";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const DataCard = ({ title, figure, description, progress, icon, rate, }) => {
    return (
        <Card className="max-w-xs mx-auto mt-4 shadow-md rounded-md bg-white border-primary border-b-2">
            <Flex className="mt-4 p-3">
                <div >
                    <div className="flex items-center gap-4 -mt-2 mb-4">
                        <h2>
                            <Icon
                                className="text-primary opacity-90  "
                                icon={icon}
                            />
                        </h2>
                        <Text className=" text-md font-quicksand">
                            {title}
                        </Text>
                    </div>
                    <Metric className="flex text-4xl">
                        {figure}
                        <span className="text-sm ml-4 text-primary bg:opacity-30 rounded-lg">{rate}</span>
                    </Metric>
                    <Flex className="mt-4 mb-4">
                        <Text className="text-gray text-sm font-quicksand">{description}</Text>
                    </Flex>

                    <Progress
                        percent={progress}
                        status="success"
                        className="mb-2"
                    />
                </div>

            </Flex>

        </Card>
    );
};

DataCard.propTypes = {
    title: PropTypes.string.isRequired,
    figure: PropTypes.number.isRequired,
    description: PropTypes.string,
    progress: PropTypes.number,
    rate: PropTypes.number,
    icon: PropTypes.node,
    addy: PropTypes.string,
};

export default DataCard;