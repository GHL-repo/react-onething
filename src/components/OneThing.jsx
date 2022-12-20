import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import CustomButton from './CustomButton';

const OneThing = ({thing, handleCompletion}) => {
    return (
        <>
            <h1 className='text-3xl sm:text-6xl font-bold text-center'>{thing}</h1>
            <CustomButton text="Mark Done" handleCompletion={handleCompletion} />
        </>
    )
}

export default OneThing;