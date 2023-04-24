import {
  LegacyCard,
  ResourceList,
  ResourceItem,
  Text,
  Button,
  Badge,
  LegacyStack,
  Spinner,
} from "@shopify/polaris";
import { useState } from "react";
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
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    if (id) {
      await deleteData(id);
      setTimeout(() => {
        setLoading(false);
        setItems((preTodo) => preTodo.filter((todo) => todo.id !== id));
      }, 1000);
    }
  };

  const handleUpdate = async (item, id) => {
    setLoading(true);
    const dataUpdte = await updateData({ isCompleted: !item.isCompleted }, id);
    setTimeout(() => {
      setLoading(false);
      setItems(dataUpdte.data);
    }, 2000);
  };

  const handledelDeleteAll = async () => {
    setLoading(true);
    const todoLists = await deleteData(selectedItems);
    setTimeout(() => {
      setLoading(false);
      setItems(todoLists.data);
    }, 2000);
  };

  const handleUpdateAll = async () => {
    setLoading(true);
    const listItem = items.filter((item) => {
      return selectedItems.includes(item.id);
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    const dataUpdate = await updateManyData(selectedItems, listItem);
    setItems(dataUpdate);
  };
  if (items)
    return (
      <>
        <LegacyCard>
          <ModalCreate handleCreate={handleCreate} />
          {loading ? (
            <Spinner accessibilityLabel="Spinner example" size="large" />
          ) : (
            ""
          )}
          <ResourceList
            items={items}
            renderItem={renderItem}
            selectedItems={selectedItems}
            onSelectionChange={setSelectedItems}
            selectable
            bulkActions={bulkActions}
          />
        </LegacyCard>
      </>
    );
  function renderItem(item) {
    const { id, content, isCompleted } = item;
    return (
      <>
        <ResourceItem
          id={id}
          key={id + isCompleted}
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
