import { Table, Tag } from "antd";
import type { TableProps } from "antd";
import OutputActions from "./output-actions";
import { useCancerManual } from "../hooks/use-cancer";
import { LungCancerData } from "../types/app-types";

const LungCancerTable = () => {
  const {data, isPending} = useCancerManual();
  console.log(data);
  
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
      dataIndex: "id",
      key: "id",
      render: (id) => {
          if (isPending) {
            return (
              <main className="text-sm text-gray-800">
                Loading...
              </main>
            );
          }
          else {
            return <OutputActions data={data as LungCancerData[]} id={id} />
          };
      },
    }
  ];
  return (
    <Table<LungCancerData> columns={columns} dataSource={data} rowKey="id" />
  )
};

export default LungCancerTable;
