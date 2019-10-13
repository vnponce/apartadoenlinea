<div class="font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify">
        <label for="{{ $id }}" class="hover:border-grey-900 italic sm:block">{{ $label ?? 'Label' }}</label>
        <input name="{{ $id }}" type="{{ $type ?? 'text' }}" placeholder="{{ $placeholder ?? '' }}" value="{{ $value ?? '' }}"
                class="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto lg:w-full">
</div>
