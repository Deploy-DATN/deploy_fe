import { RoomDTO } from "@/services/Dto/MotelDto";
import { faPenToSquare, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const RowTableRoom = (props: {
  room: RoomDTO;
  toggleModal: (modalName: string, roomId: number) => void;
}) => {
  const { room, toggleModal } = props;

  const CheckStatus = (status: number) => {
    if (status === 1) {
      return (
        <span className="tt-dangthue badge bg-light-success rounded-pill px-3 py-2 fs-3">
          Đang trống
        </span>
      );
    } else if (status === 2) {
      return (
        <span className="span-sudung-room-motel badge rounded-pill px-3 py-2 fs-3">
          Đang thuê
        </span>
      );
    } else if (status === 3) {
      return (
        <span className="span-baotri-room-motel badge rounded-pill px-3 py-2 fs-3">
          Bảo trì
        </span>
      );
    }
  };

  return (
    <>
      <tr key={props?.room?.id}>
        <td>{props?.room?.id}</td>
        <td>
          {props?.room?.area}m<sup>2</sup>
        </td>
        <td>{props?.room?.price}</td>
        <td>123123</td>
        <td>3243242</td>
        <td>
          <FontAwesomeIcon
            icon={faUserAlt}
            size="sm"
            color="#298b90"
            className="icon-table-motel me-2"
          />{" "}
          {props?.room?.userFromRoom}
        </td>
        <td>{CheckStatus(props?.room?.status)}</td>
        <td>
          <a
            href="#"
            className=" px-2 py-1 mx-1 btn-transform-y2"
            onClick={() => toggleModal("infoRoom", room.id)}
          >
            {" "}
            <FontAwesomeIcon
              icon={faEllipsis}
              size="2xl"
              color="#298b90"
              className="icon-table-motel"
            />
          </a>
          <a
            className=" px-2 py-1 mx-1 btn-transform-y2"
            onClick={() => toggleModal("editRoom", room.id)}
          >
            <FontAwesomeIcon
              icon={faPenToSquare}
              size="2xl"
              color="#298b90"
              className="icon-table-motel"
            />
          </a>
          <a href="#" className=" px-2 py-1 mx-1 btn-transform-y2">
            <FontAwesomeIcon
              icon={faCheckDouble}
              size="2xl"
              color="#298b90"
              className="icon-table-motel"
            />
          </a>
          <a
            href="#"
            className=" px-2 py-1 mx-1 btn-transform-y2"
            onClick={() => toggleModal("addUserRoom",room.id)}
          >
            <FontAwesomeIcon
              icon={faUserPlus}
              size="2xl"
              color="#298b90"
              className="icon-table-motel"
            />
          </a>
        </td>
      </tr>
    </>
  );
};

export default RowTableRoom;
