import { AiOutlineLinkedin } from "react-icons/ai";
import { FaSquareGithub } from "react-icons/fa6";


function FollowOn() {
  return (
    <div
      className="fadded-text pt-2" // fadded-text is custom class
    >
      <p>Connect With Me:</p>
      
      {/* 

        #  #                     #            ##
        #  #                     #           #  #
        ####   ###  ###    ###   ###         #  #  ####   ###
        #  #  #  #  #  #  ##     #  #        #  #    #   #  #
        #  #  # ##  #       ##   #  #        #  #   #    # ##
        #  #   # #  #     ###    #  #         ##   ####   # #   
        
      */}
                                              
      <div className="flex gap-4 pt-3 items-center">
        <a href="https://www.linkedin.com/in/harshoza955/">
          <AiOutlineLinkedin size={24} lassName="hover:bg-teal-400 cursor-pointer"/>
        </a>
        <a href="https://github.com/ozaharsh95">
          <FaSquareGithub size={24} lassName="hover:bg-teal-400 cursor-pointer"/>
        </a>
      </div>
    </div>
  )
}

export default FollowOn