import styles from "./index.less";
import {ActionSheet, Button, Dialog, List, Modal, SideBar, Toast} from "antd-mobile";
import {AddCircleOutline} from 'antd-mobile-icons';
import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "@@/plugin-dva/exports";
import {Action, ActionSheetRef} from "antd-mobile/es/components/action-sheet/action-sheet";
import {manageTypeList} from '@/utils';
import EditDish from "@/components/EditDish";
import EditCategory from "@/components/EditCategory";
import {useMount} from "ahooks";

export default function () {
  let currentItem = null;
  const {currentType, records, dishes, categories} = useSelector((state: any) => state.manage);
  const dispatch = useDispatch();
  useMount(() => {
    dispatch({type: `manage/getDishes`});
    dispatch({type: `manage/getCategories`});
  });

  function getCurrentList() {
    switch (currentType.key) {
      case 'Dishes':
        return dishes;
      case 'Categories':
        return categories;
      case 'Records':
        return records;
      default:
        return dishes;
    }
  }
  const editDish = (e: any) => {
    const editDishModal = Modal.show({
      content: (<EditDish dish={currentItem} categories={categories} saveFn={saveDish}/>),
      closeOnMaskClick: true
    });
    function saveDish(dish: any) {
      dispatch({type: `manage/postDishes`, payload: dish});
      editDishModal.close();
    }
  };

  const editCategory = (e: any) => {
    const editCategoryModal = Modal.show({
      content: (<EditCategory category={currentItem} saveFn={saveCategory}/>),
      closeOnMaskClick: true
    });
    function saveCategory(category: any) {
      dispatch({type: `manage/postCategories`, payload: category});
      editCategoryModal.close();
    }
  };

  const handler = useRef<ActionSheetRef>()

  const modifyProp = {
    text: '修改',
    key: 'edit',
    onClick: currentType?.key === 'Dishes' ? editDish : editCategory,
  };
  const deleteProp = {
    text: '删除',
    key: 'delete',
    danger: true,
    onClick: () => {
      Dialog.confirm({
        content: '确定要删除吗？',
        closeOnMaskClick: true,
        onConfirm: () => {

        }
      })
    }
  };
  const actions: Action[] = [
    {
      text: '详情',
      key: 'detail',
      onClick: () => {
        Dialog.show({
          content: JSON.stringify(currentItem, null, 2),
          closeOnAction: true,
          actions: [
            {
              key: 'cancel',
              text: '取消',
            },
            [
              modifyProp,
              deleteProp
            ],
          ],
        })
      },
    },
    modifyProp,
    deleteProp
  ];

  return (
    <div className={styles.flexContainer}>
      <SideBar
        activeKey={`${currentType?.key}`}
        onChange={(key: string) => {
          const [current] = manageTypeList.filter(item => item.key == key);
          dispatch({type: "manage/setCurrentType", payload: current})
          dispatch({type: `manage/get${current.key}`});
        }}>
        {manageTypeList?.map(item => (
          <SideBar.Item key={`${item.key}`} title={item.name + '管理'}/>
        ))}
      </SideBar>
      <div className={styles.manageContainer}>
        <span className={styles.addBtn} onClick={currentType?.key === 'Dishes' ? editDish : editCategory}><AddCircleOutline/></span>
        <List header={`${currentType.name}展示`}>
          {getCurrentList().map((d: any) => <List.Item key={String(d.id)}
                                                       onClick={() => {
                                                         currentItem = d;
                                                         handler.current = ActionSheet.show({
                                                           actions,
                                                           onClose: () => {
                                                           },
                                                         })
                                                       }}>{d.name}</List.Item>)}
        </List>
      </div>
    </div>
  );
}
