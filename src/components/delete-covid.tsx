import { DeleteOutlined } from "@ant-design/icons"
import { Button, Popconfirm, PopconfirmProps, message } from "antd"
import { useCovid } from "../hooks/use-covid"

const DeleteCovid = ({id} : {
    id : string
}) => {
    const {Delete} = useCovid();
    const confirm: PopconfirmProps['onConfirm'] = async (e) => {
        console.log(e);
        await Delete.mutateAsync(id);
        message.success('Click on Yes');
      };
      
      const cancel: PopconfirmProps['onCancel'] = (e) => {
        console.log(e);
        message.error('Click on No');
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

export default DeleteCovid