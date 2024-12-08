import { shallow, mount } from "enzyme";
import React from "react";
import { Notifications } from "./Notifications";
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from "aphrodite";
import notificationsNormalizer from "../schema/notifications";
import { Map, fromJS } from "immutable";
import { getUnreadNotifications } from "../selectors/notificationSelector";

const NOTIFICATIONS = [
  {
    id: "5debd76480edafc8af244228",
    author: {
      id: "5debd764a7c57c7839d722e9",
      name: {
        first: "Poole",
        last: "Sanders",
      },
      email: "poole.sanders@holberton.nz",
      picture: "http://placehold.it/32x32",
      age: 25,
    },
    context: {
      guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      isRead: true,
      type: "urgent",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  },
  {
    id: "5debd764507712e7a1307303",
    author: {
      id: "5debd7648ba8641ce0a34ea4",
      name: {
        first: "Norton",
        last: "Grimes",
      },
      email: "norton.grimes@holberton.nz",
      picture: "http://placehold.it/32x32",
      age: 37,
    },
    context: {
      guid: "cec84b7a-7be4-4af0-b833-f1485433f66e",
      isRead: false,
      type: "urgent",
      value:
        "ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et. ",
    },
  },
  {
    id: "5debd76444dd4dafea89d53b",
    author: {
      id: "5debd764a7c57c7839d722e9",
      name: {
        first: "Poole",
        last: "Sanders",
      },
      email: "poole.sanders@holberton.nz",
      picture: "http://placehold.it/32x32",
      age: 25,
    },
    context: {
      guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
      isRead: false,
      type: "urgent",
      value:
        "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed",
    },
  },
];

describe("<Notifications />", () => {
  let listNotifications;
  let latestNotification;
      // );

      expect(listItems.props().type).toEqual("noNotifications");
      expect(listItems.text()).toEqual("No new notifications for now");
    });

    // it("when calling the function markAsRead on an instance of the component, the spy is being called with the right message", () => {
    //   const wrapper = shallow(<Notifications displayDrawer />);

    //   console.log = jest.fn();

    //   const instance = wrapper.instance();

    //   const id = 5;

    //   instance.markAsRead(id);

    //   expect(console.log).toHaveBeenCalledWith(
    //     `Notification ${id} has been marked as read`
    //   );
    //   jest.restoreAllMocks();
    // });

    // it("does not rerender when updating the props of the component with the same list", () => {
    //   const listNotifications = [
    //     { id: 1, type: "default", value: "New course available" },
    //     { id: 2, type: "urgent", value: "New resume available" },
    //   ];

    //   const wrapper = shallow(
    //     <Notifications displayDrawer listNotifications={listNotifications} />
    //   );

    //   const shouldComponentUpdate = jest.spyOn(
    //     Notifications.prototype,
    //     "shouldComponentUpdate"
    //   );

    //   wrapper.setProps({ listNotifications: listNotifications });

    //   expect(shouldComponentUpdate).toHaveBeenCalled();
    //   expect(shouldComponentUpdate).toHaveLastReturnedWith(false);

    //   jest.restoreAllMocks();
    // });

    // it("does rerender when updating the props of the component with a longer list", () => {
    //   let listNotifications = [
    //     { id: 1, type: "default", value: "New course available" },
    //     { id: 2, type: "urgent", value: "New resume available" },
    //   ];

    //   const listNotifications2 = [
    //     { id: 1, type: "default", value: "New course available" },
    //     { id: 2, type: "urgent", value: "New resume available" },
    //     { id: 3, type: "urgent", html: { __html: latestNotification } },
    //   ];

    //   const wrapper = shallow(
    //     <Notifications displayDrawer listNotifications={listNotifications} />
    //   );

    //   const shouldComponentUpdate = jest.spyOn(
    //     Notifications.prototype,
    //     "shouldComponentUpdate"
    //   );

    //   wrapper.setProps({ listNotifications: listNotifications2 });

    //   expect(shouldComponentUpdate).toHaveBeenCalled();
    //   expect(shouldComponentUpdate).toHaveLastReturnedWith(true);

    //   jest.restoreAllMocks();
    // });

    it("verify that clicking on the menu item calls handleDisplayDrawer", () => {
      const handleDisplayDrawer = jest.fn();
      const handleHideDrawer = jest.fn();

      const wrapper = shallow(
        <Notifications
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
        />
      );

      wrapper.find("#menuItem").simulate("click");

      expect(handleDisplayDrawer).toHaveBeenCalled();
      expect(handleHideDrawer).not.toHaveBeenCalled();

      jest.restoreAllMocks();
    });

    it("verify that clicking on the button calls handleHideDrawer", () => {
      const handleDisplayDrawer = jest.fn();
      const handleHideDrawer = jest.fn();

      const wrapper = shallow(
        <Notifications
          displayDrawer
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
        />
      );

      wrapper.find("#closeNotifications").simulate("click");

      expect(handleDisplayDrawer).not.toHaveBeenCalled();
      expect(handleHideDrawer).toHaveBeenCalled();

      jest.restoreAllMocks();
    });

    it("verify that the function fetchNotifications is called when the component is mounted", () => {
      const fetchNotifications = jest.fn();
      const handleHideDrawer = jest.fn();

      const wrapper = shallow(
        <Notifications fetchNotifications={fetchNotifications} />
      );

      expect(fetchNotifications).toHaveBeenCalled();

      jest.restoreAllMocks();
    });
  });
});
