import React from "react";

const LinkTree = () => {
  return (
    <div className="text-center text-[#101828] text-lg font-semibold">
      <ul className="flex flex-col gap-6 ">
        <a href="https://twitter.com/boluwaduroh">
          <li className="w-[100%] p-6 border border-solid rounded-lg border-#EAECF0 bg-[#EAECF0]">
            Twitter Link
          </li>
        </a>
        <a href="https://training.zuri.team/" id="btn__zuri">
          <li className="w-[100%] p-6 border border-solid rounded-lg border-#EAECF0 bg-[#EAECF0]">
            Zuri Team
          </li>
        </a>
        <a href="http://books.zuri.team" id="books">
          <li className="w-[100%] p-6 border border-solid rounded-lg border-#EAECF0 bg-[#EAECF0]">
            Zuri Books
          </li>
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=moboluwaduro"
          id="book__python">
          <li className="w-[100%] p-6 border border-solid rounded-lg border-#EAECF0 bg-[#EAECF0]">
            Python Books
          </li>
        </a>
        <a href="https://background.zuri.team" id="pitch">
          <li className="w-[100%] p-6 border border-solid rounded-lg border-#EAECF0 bg-[#EAECF0]">
            {" "}
            Background Check for Coders
          </li>
        </a>
        <a href="https://books.zuri.team/design-rules" id="book__design">
          <li className="w-[100%] p-6 border border-solid rounded-lg border-#EAECF0 bg-[#EAECF0]">
            Design Books
          </li>
        </a>
      </ul>
    </div>
  );
};

export default LinkTree;
