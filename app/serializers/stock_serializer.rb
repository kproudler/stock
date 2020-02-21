class StockSerializer < ActiveModel::Serializer
  attributes :id, :name, :ticker, :blob
end
