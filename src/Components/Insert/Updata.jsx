import React from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Http } from "../../network/request";
const props2 = {
  listType: "picture",
  className: "upload-list-inline",
  onRemove: async (file) => {
    const result = await Http({
      url: "/delete",
      method: "post",
      data: {
        Name: file.name,
      },
    });
    if (result.status === 200) return message.success("删除成功");
    else message.warning("服务器异常");
  },
  customRequest: async (val) => {
    let fl = new FormData();
    fl.append("File", val.file);
    const result = await Http({
      url: "/AddPhoto",
      method: "post",
      data: fl,
    });
    if (result.status === 200) return message.success("上传成功");
    else message.warning("服务器异常");
  },
};

function Update() {
  return (
    <>
      &nbsp; &nbsp; &nbsp;
      <Upload {...props2}>
        <Button>
          <UploadOutlined />
          Upload
        </Button>
      </Upload>
    </>
  );
}
export default Update;
// import React from "react";
// function Updata() {
//   return (
//     <div>
//       <input
//         type="file"
//         onChange={async (e) => {
//           console.log(e.target.files[0]);
//         }}
//       />
//     </div>
//   );
// }
// export default Updata;
