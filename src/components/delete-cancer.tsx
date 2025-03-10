import { Button, Popconfirm, PopconfirmProps, message } from "antd";
import { useCtCancer } from "../hooks/use-ct-cancer";
import { DeleteOutlined } from "@ant-design/icons";

const DeleteCancerCt = ({id} : {
    id : string
}) => {
    const {Delete} = useCtCancer();
    const confirm: PopconfirmProps['onConfirm'] = async (e) => {
        console.log(e);
        await Delete.mutateAsync(id);
        message.success('Record Deleted Successfully');
      };
      
      const cancel: PopconfirmProps['onCancel'] = (e) => {
        console.log(e);
      };
  return (
    <div>
        <Popconfirm
            title="Delete History"
            description="Are you sure to delete this History"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
        >
            <Button color="red" size="small" variant="solid"><DeleteOutlined /></Button>
        </Popconfirm>
    </div>
  )
}

export default DeleteCancerCt