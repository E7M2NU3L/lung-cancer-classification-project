import React from "react";
import { Table, Tag } from "antd";
import type { TableProps } from "antd";
import OutputActions from "./output-actions";

interface LungCancerData {
  id: number;
  gender: "M" | "F";
  age: number;
  smoking: number;
  yellow_fingers: number;
  anxiety: number;
  peer_pressure: number;
  chronic_disease: number;
  fatigue: number;
  allergy: number;
  wheezing: number;
  alcohol_consuming: number;
  coughing: number;
  shortness_of_breath: number;
  swallowing_difficulty: number;
  chest_pain: number;
  lung_cancer: "YES" | "NO";
}

const columns: TableProps<LungCancerData>["columns"] = [
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Smoking",
    dataIndex: "smoking",
    key: "smoking",
    render: (value) => (value ? "Yes" : "No"),
  },
  {
    title: "Yellow Fingers",
    dataIndex: "yellow_fingers",
    key: "yellow_fingers",
    render: (value) => (value ? "Yes" : "No"),
  },
  {
    title: "Anxiety",
    dataIndex: "anxiety",
    key: "anxiety",
    render: (value) => (value ? "Yes" : "No"),
  },
  {
    title: "Chronic Disease",
    dataIndex: "chronic_disease",
    key: "chronic_disease",
    render: (value) => (value ? "Yes" : "No"),
  },
  {
    title: "Lung Cancer",
    dataIndex: "lung_cancer",
    key: "lung_cancer",
    render: (text) => (
      <Tag color={text === "YES" ? "red" : "green"}>{text}</Tag>
    ),
  },
  {
    title : "Actions",
    key: "actions",
    render: () => {
        return <OutputActions />;
    },
  }
];

const data: LungCancerData[] = [
  {
    id: 1,
    gender: "M",
    age: 55,
    smoking: 1,
    yellow_fingers: 0,
    anxiety: 1,
    peer_pressure: 1,
    chronic_disease: 0,
    fatigue: 1,
    allergy: 0,
    wheezing: 1,
    alcohol_consuming: 1,
    coughing: 1,
    shortness_of_breath: 1,
    swallowing_difficulty: 0,
    chest_pain: 1,
    lung_cancer: "NO",
  },
  {
    id: 2,
    gender: "M",
    age: 55,
    smoking: 1,
    yellow_fingers: 0,
    anxiety: 1,
    peer_pressure: 1,
    chronic_disease: 0,
    fatigue: 1,
    allergy: 0,
    wheezing: 1,
    alcohol_consuming: 1,
    coughing: 1,
    shortness_of_breath: 1,
    swallowing_difficulty: 0,
    chest_pain: 1,
    lung_cancer: "NO",
  },
];

const LungCancerTable: React.FC = () => (
  <Table<LungCancerData> columns={columns} dataSource={data} rowKey="id" />
);

export default LungCancerTable;
