// UI Library
import { Card } from "antd";
// type
import type { IOverviewStat } from "../types/overview";
// styles
import "./styles/overview_stat_card.scss";

interface OverviewStatCardProps {
  data: IOverviewStat;
}

const OverviewStatCard = ({ data }: OverviewStatCardProps) => {
  return (
    <Card className={`overview-stat-card overview-stat-card__${data.key}`}>
      <div className="overview-stat-card__title">{data.title}</div>

      <div className="overview-stat-card__value">{data.value}</div>

      <div className="overview-stat-card__description">{data.description}</div>
    </Card>
  );
};

export default OverviewStatCard;
