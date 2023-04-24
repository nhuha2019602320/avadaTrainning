import {
  LegacyCard,
  ResourceList,
  ResourceItem,
  Text,
  Button,
  Badge,
  LegacyStack,
} from "@shopify/polaris";
import { useEffect, useState } from "react";
import ModalCreate from "../Modal/ModalCreate";
import {
  createData,
  deleteData,
  updateData,
  updateManyData,
  useFetchApi,
} from "../hooks/useFetchApi";

function TodoList() {
  const [selectedItems, setSelectedItems] = useState([]);
  const { data: items, setData: setItems } = useFetchApi(
    "http://localhost:5000/api/todos"
  );


  const bulkActions = [
    {
      content: "Delete",
      onAction: () => handledelDeleteAll(),
    },
    {
      content: "Complete",
      onAction: () => handleUpdateAll(),
    },
  ];

  const handleCreate = async (dataReq) => {
    if (dataReq) {
      const respon = await createData(dataReq);
      console.log(respon.data);
      setItems([...items, respon.data]);
    }
  };

  const handleDelete = async (id) => {
    if (id) {
      await deleteData(id);
      setItems((preTodo) => preTodo.filter((todo) => todo.id !== id));
    }
  };

  const handleUpdate = async (item, id) => {
    const dataUpdte = await updateData({ isCompleted: !item.isCompleted }, id);
    setItems(dataUpdte.data);
  };

  const handledelDeleteAll = async () => {
    console.log("first", selectedItems);
    const todoLists = await deleteData(selectedItems);
    setItems(todoLists.data);
  };

  const handleUpdateAll = async () => {
    const listItem = items.filter((item) => {
      return selectedItems.includes(item.id);
    });
    const dataUpdate = await updateManyData(selectedItems, listItem);
    console.log("dataUPdate", dataUpdate);
    setItems(dataUpdate);
    // setItems(dataUpdate);
    // console.log(items);
    console.log(items)
  };
  console.log("render")
  if (items)
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "20px",
              fontFamily: "Arial",
              lineHeight: "32px",
            }}
          >
            Todos
          </h1>
        </div>
        <LegacyCard>
          <ModalCreate handleCreate={handleCreate} />
          <ResourceList
            items={items}
            renderItem={renderItem}
            selectedItems={selectedItems}
            onSelectionChange={setSelectedItems}
            selectable
            bulkActions={bulkActions}
          />
        </LegacyCard>
      </div>
    );

  function renderItem(item) {
    const { id, content, isCompleted } = item;
    return (
      <>
        <ResourceItem
          id={id}
          // accessibilityLabel={`View details for ${content}`}
        >
          <LegacyStack>
            <LegacyStack.Item fill>
              <Text variant="bodyMd" fontWeight="bold" as="h3">
                {content}
              </Text>
            </LegacyStack.Item>
            <LegacyStack.Item>
              <div style={{ marginTop: "3px" }}>
                {isCompleted ? (
                  <Badge status="success">Done</Badge>
                ) : (
                  <Badge>Pending</Badge>
                )}
              </div>
            </LegacyStack.Item>
            <LegacyStack.Item>
              <Button onClick={() => handleUpdate(item, id)} size="slim">
                Complete
              </Button>
            </LegacyStack.Item>
            <LegacyStack.Item>
              <Button onClick={() => handleDelete(id)} destructive size="slim">
                Delete
              </Button>
            </LegacyStack.Item>
          </LegacyStack>
        </ResourceItem>
      </>
    );
  }
}

export default TodoList;
