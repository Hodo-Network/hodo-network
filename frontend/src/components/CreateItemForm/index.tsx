import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { ROUTE_ACCOUNT } from "../../constants/routes";
import { PureCreateItemForm } from "./CreateItemForm";

// interface IParams {
//   contractAddress: string;
// }

const client = ipfsHttpClient({
  apiPath: "https://ipfs.infura.io:5001/api/v0",
});

const CreateItemForm = () => {
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  // const { contractAddress } = useParams<IParams>();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<any>(null);
  const [fileUrl, setFileUrl] = useState<string>("");

  useEffect(() => {
    // TODO: add geolocation
    if (name && description && file) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, description, file]);

  const onUpdateInput = (key: string, val: string) => {
    if (key === "name") {
      setName(val);
    }
    if (key === "description") {
      setDescription(val);
    }
  };

  const onSubmitForm = (event: any) => {
    event.preventDefault();
    setLoading(true);
    // onCreateItem();
    onCreateItemAlert();
    setLoading(false);
  };

  // TODO: remove once Create is implemented
  const onCreateItemAlert = () => {
    alert("Unable to create items at this time. Coming soon");
  };

  const onCreateItem = async () => {
    if (!name || !description || !file) return;

    try {
      const added = await client.add(file, {
        progress: (prog: any) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log("Upload file error:", error);
    }

    if (!fileUrl) return;

    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    });

    try {
      const added = await client.add(data);
      // const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      // createSale(url);
      history.push(ROUTE_ACCOUNT);
    } catch (error) {
      console.log("Create item error:", error);
    }
  };

  const onUploadFile = async (e: any) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <PureCreateItemForm
      loading={loading}
      onSubmitForm={onSubmitForm}
      onUpdateInput={onUpdateInput}
      onUploadFile={onUploadFile}
      file={file}
      disabled={disabled}
    />
  );
};

export default CreateItemForm;
